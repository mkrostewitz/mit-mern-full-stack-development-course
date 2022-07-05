function useForm(initialValues){
    const [values, setValues] = React.useState(initialValues);

    function handleValue(e){
        if (e.target.type == 'checkbox') {
            console.log(e.target.checked);
            return e.target.checked;
        };
        console.log(e.target.value);
        return e.target.value;
    }

    return [
        values,
        e => {
            if (e.type === 'change'){ 
                console.log('name:',e.target.name);
                setValues({
                    ...values,
                    [e.target.name]: (handleValue(e))
                });
            }
        }
    ];
}