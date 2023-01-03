import { useState } from 'react'
import Form from './Form'
import Table from './Table'
import Card from './Card'

export type FormObj = {
    id: string
    title: string
    desc: string
}

function Main() {
    const [result, setResult] = useState<FormObj[]>([])
    const [formObj, setFormObj] = useState<FormObj | null>(null)

    return (
        <>
            <Form result={result} setResult={setResult} formObj={formObj} setFormObj={setFormObj} />
            <Table result={result} setResult={setResult} setFormObj={setFormObj} />
            <Card />
        </>
    )
}

export default Main;