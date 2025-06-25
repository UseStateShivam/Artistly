import React from 'react'

// Props interface for the FormTitle component
interface FormTitleProps {
    title: string           // The main title text
    description?: string    // Optional description text
}

// Functional component to display a form title and optional description
function FormTitle({ title, description }: FormTitleProps) {
    return (
        <>
            {/* Render the main title */}
            <h1 className="text-3xl font-bold text-[#174f46] mb-4">{title}</h1>
            {/* Render the description if provided */}
            {description && (
                <p className="mb-8 text-[#174f46]">{description}</p>
            )}
        </>
    )
}

export default FormTitle