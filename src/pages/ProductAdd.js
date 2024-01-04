import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button } from 'semantic-ui-react'
import TBTTextInput from '../utilities/customFormControls/TBTTextInput'

function ProductAdd() {

    const initialValues = { productName: "", unitPrice: 0, }
    const schema = Yup.object({
        productName: Yup.string().required("Zorunlu alan"),
        unitPrice: Yup.number().required("Zorunlu alan")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                <Form className="ui-form">
                    <TBTTextInput name="productName" placeholder='Ürün Adı'/>
                    <TBTTextInput name="unitPrice" placeholder='Ürün Fiyatı'/>

                    {/* <FormField>
                        <Field name="productName" placeholder='Ürün Adı'>
                        </Field>
                         <ErrorMessage name="producName" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                         }></ErrorMessage>
                    </FormField> */}
                    {/* <FormField>
                        <Field name="unitPrice" placeholder='Ürün Fiyatı'>
                        </Field>
                        <ErrorMessage name="unitPrice" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                         }></ErrorMessage>
                    </FormField> */}
                </Form>
            </Formik>
            <Button color="green" type="submit">Ekle</Button>
        </div>
    )
}

export default ProductAdd() 
