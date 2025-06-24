import React from 'react'

interface FormTitleProps {
    title: string
    description?: string
}

function FormTitle({ title, description }: FormTitleProps) {
    return (
        <>
            <h1 className="text-3xl font-bold text-[#174f46] mb-4">{title}</h1>
            {description && (
                <p className="mb-8 text-[#174f46]">{description}</p>
            )}
        </>
    )
}

export default FormTitle