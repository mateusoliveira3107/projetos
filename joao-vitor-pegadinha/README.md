# João Vitor indo à sua casa — pegadinha

Uma página estática de pegadinha com visual inspirado em alertas de computador, radar **fictício**, fotografia substituível e contagem regressiva de dois minutos. Nenhum dado pessoal é coletado ou enviado.

## Abrir no VS Code
1. Extraia o ZIP e abra a pasta `joao-vitor-pegadinha` no VS Code.
2. Abra `index.html` no navegador (ou use a extensão Live Server).
3. Para mostrar uma foto que você tenha autorização para utilizar, coloque-a na pasta como `foto-joao.jpg` e troque no `index.html` a referência `foto-joao.svg` por `foto-joao.jpg`.
4. Para ajustar a contagem, altere `DURACAO_SEGUNDOS` em `script.js`.

## Criar um link para compartilhar
O arquivo ZIP não gera um site público sozinho. Publique a **pasta extraída** usando uma hospedagem de sites estáticos:
- Netlify Drop: https://app.netlify.com/drop (arraste a pasta do projeto e use o link publicado)
- GitHub Pages: envie os arquivos para um repositório e ative Pages nas configurações.

**Aviso:** a localização e o radar exibidos são completamente simulados. A página não solicita geolocalização nem rastreia visitantes. A pegadinha é revelada quando o cronômetro chega a zero.
