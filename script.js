// Define o IP da ESP8266 (substitua pelo IP real)
const ESP8266_IP = 'http://192.168.4.1';

document.addEventListener('DOMContentLoaded', () => {
  const liberarBtn = document.getElementById('liberar-btn');
  const agendarForm = document.getElementById('agendar-form');

  liberarBtn.addEventListener('click', async () => {
    try {
      const response = await fetch(`${ESP8266_IP}/girar`, {
        method: 'GET'
      });
      if (response.ok) {
        alert('Ração liberada com sucesso!');
      } else {
        alert('Erro ao liberar ração');
      }
    } catch (error) {
      alert('Falha na conexão com a ESP8266');
    }
  });

  agendarForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const hora1 = document.getElementById('hora1').value;
    const hora2 = document.getElementById('hora2').value;

    try {
      const response = await fetch(`${ESP8266_IP}/agendar`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ hora1, hora2 })
      });

      if (response.ok) {
        alert('Horários salvos com sucesso!');
      } else {
        alert('Erro ao salvar horários');
      }
    } catch (error) {
      alert('Falha na conexão com a ESP8266');
    }
  });
});
