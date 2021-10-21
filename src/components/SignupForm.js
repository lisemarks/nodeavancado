import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  nome: Yup.string()
    .min(3, "Precisa digitar no mínimo 3 caracteres")
    .max(50, "Digite no máximo 50 caracteres")
    .required("Campo obrigatório"),
  sobrenome: Yup.string()
    .min(3, "Precisa digitar no mínimo 3 caracteres")
    .max(50, "Digite no máximo 50 caracteres")
    .required("Campo obrigatório"),
  email: Yup.string()
    .required("Campo obrigatório")
    .email('E-mail inválido'),
    cpf: Yup.string()
    .min(11, "Digite os 11 caracteres do seu CPF")
    .max(11, "Máximo de 11 caracteres")
    .required("Campo obrigatório"),
    datanascimento: Yup.date()
    .max(new Date(), "A data não pode ser maior que hoje")
    .required("Campo obrigatório"),
    genero: Yup.string()
    .required("Campo obrigatório"),
    celular: Yup.string()
    .min(11, "Digite os 11 caracteres = DDD+Número")
    .max(11, "Máximo de 11 caracteres")
    .required("Campo obrigatório")
});

function SignupForm() {
  return (
    <Formik
      initialValues={{
        nome: '',
        sobrenome: '',
        email: '',
        cpf: '',
        datanascimento: '',
        genero: '',
        celular: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        alert("Dados enviados!");
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <div>
          <Form>
            <label>Nome:</label>
            <Field type="text" name="nome" />
            { touched.nome && errors.nome ? <div>{ errors.nome }</div> : null }
            <br />
            <label>Sobrenome:</label>
            <Field type="text" name="sobrenome" />
            { touched.sobrenome && errors.sobrenome ? <div>{ errors.sobrenome }</div> : null }
            <br />
            <label>E-mail:</label>
            <Field type="text" name="email" />
            { touched.email && errors.email ? <div>{ errors.email }</div> : null }
            <br />
            <label>CPF:</label>
            <Field type="text" name="cpf" />
            { touched.cpf && errors.cpf ? <div>{ errors.cpf }</div> : null }
            <br />
            <label>Data de nascimento:</label>
            <Field type="text" name="datanascimento" />
            { touched.datanascimento && errors.datanascimento ? <div>{ errors.datanascimento }</div> : null }
            <br />
            <label>Genero:</label>
            <Field as="select" name="genero">
              <option value="0">Selecione</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
            </Field>
            { touched.genero && errors.genero ? <div>{ errors.genero }</div> : null }
            <br />
            <label>Celular:</label>
            <Field type="text" name="celular" />
            { touched.celular && errors.celular ? <div>{ errors.celular }</div> : null }
            <br /><br />
            <input type="submit" value="Enviar" />
          </Form>
        </div>
        
      )}
    </Formik>    
  );
}

export default SignupForm;