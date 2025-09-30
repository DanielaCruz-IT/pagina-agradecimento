exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    try {
      const data = JSON.parse(event.body);

      // Aqui você pode futuramente salvar no Google Sheets, SharePoint etc.
      console.log("Novo CSAT recebido:", data);

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Nota registrada com sucesso!" }),
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Erro ao processar requisição" }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Método não permitido" }),
  };
};
