import express from "express"
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.json({ item: 'GlobalLang Language School'});
});
app.get('/sobre', (req,res)=>{
    res.json({mensagem: 'Certificações internacionais'});
});
app.get('/cursos', (req,res)=>{
    const itens =[
        {id:1, lingua: "Inglês",   nivel: "Intermediário", mensalidade: 250},
        {id:2, lingua: "Francês",  nivel: "Básico I",      mensalidade: 230},
        {id:3, lingua: "Espanhol", nivel:"Básico II",      mensalidade:240}
    ];
    res.json(itens);
});

app.listen(PORT, ()=>{
    console.log('Servidor rodando na porta 3000');
    console.log(`http://localhost:${PORT}`)
});
