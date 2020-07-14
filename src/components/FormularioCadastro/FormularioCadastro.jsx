import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function FormularioCadastro() {
  return (
    <form>
      <TextField id="nome" label="Nome" variant="outlined"  margin="normal" fullWidth/>
      <TextField id="sobrenome" label="Sobrenome"  variant="outlined" margin="normal" fullWidth/>
      <TextField id="CPF" label="CPF"  variant="outlined" margin="normal" fullWidth/>

      <label>Promoções</label>
      <input type="checkbox" />
      <label>Novidades</label>
      <input type="checkbox" />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
