
const FormSubmissions = {
    slug: "form-submissions",
    fields: [
        {
            name: "email",
            type: "text",
            label: "Form Email",
            admin:{
                readOnly: true,
            }

        },
        {
            name: "message",
            type: "textarea",
            label: "Message",
            admin:{
                readOnly: true,
            }
        },
        {
            name: "source",
            type: "text",
            label: "Form Source",
            admin:{
                readOnly: true,
                position: "sidebar",
            }

        }
    ]


}

export default FormSubmissions;