import { ChangeEvent, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FormObj } from './Main';
import { SetFormObj, SetResult } from './Table';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';

type FormProps = {
    result: FormObj[],
    setResult: SetResult,
    formObj: FormObj | null,
    setFormObj: SetFormObj
}

function Form(props: FormProps) {
    const { result, setResult, formObj, setFormObj } = props;

    const uid = uuid().slice(0, 8)
    const [form, setForm] = useState<FormObj>({ id: uid, title: '', desc: '' })

    useEffect(() => {
        if (formObj) {
            console.log(formObj)
            setForm(formObj)
        }
    }, [formObj])

    const valueChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
        setForm({ ...form, [`${field}`]: e.target.value })
    }

    const resetForm = () => {
        setForm({ id: uid, title: '', desc: '' })
    }

    const taskSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (form.title !== '') {
            if (formObj) {
                result.forEach((element: { id: string, title: string, desc: string }) => {
                    if (form.id === element.id) {
                        element.title = form.title;
                        element.desc = form.desc;
                    }
                });
            }
            else {
                setResult((oldResult: FormObj[]) => [...oldResult, form])
            }
            setFormObj(null)
            resetForm();
        }
        else {
            alert("please enter a title")
        }
    }

    return (
        <Card sx={{ mt: 6, p: 4 }}>
            <form
                noValidate
                autoComplete="off"
                onSubmit={taskSubmit}
            >
                <TextField
                    sx={{ mt: 3 }}
                    id="text"
                    value={form.title}
                    onChange={(e: any) => valueChange(e, 'title')}
                    label="Task"
                    variant='outlined'
                    fullWidth
                />
                <TextField
                    sx={{ mt: 2 }}
                    id="text"
                    value={form.desc}
                    onChange={(e: any) => valueChange(e, 'desc')}
                    label="Description"
                    variant='outlined'
                    fullWidth
                />
                <Button type="submit" variant="contained" sx={{ mt: 2 }} color='primary'>Submit</Button>
            </form>
        </Card >

    )
}

export default Form;
