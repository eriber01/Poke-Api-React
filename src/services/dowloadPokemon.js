

export default function handleText (data){


    if(data.name === undefined){
        alert('Busca un Pokemon para poder Descargarlo')
    }else{

        //crear el archivo de texto
        function descargarArchivo(contenidoEnBlob) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var save = document.createElement('a');
                save.href = event.target.result;
                save.target = '_blank';
                save.download = data.name || 'o.txt';
                var clicEvent = new MouseEvent('click', {
                    'view': window,
                        'bubbles': true,
                        'cancelable': true
                });
        
                save.dispatchEvent(clicEvent);
                (window.URL || window.webkitURL).revokeObjectURL(save.href);
            };
                reader.readAsDataURL(contenidoEnBlob);
            };
            
              //llena el array con los datos que iran dentro del objeto
                function generarTexto(data) {
                    var texto = [];
            
                texto.push(`Datos de ${data.name}\n`);
                texto.push('Nombre: ');
                texto.push(data.name);
                texto.push('\n');
                texto.push('Orden en la Pokedex: ');
                texto.push(data.order);
                texto.push('\n');
                texto.push('Experiencia:');
                texto.push(data.exp);
                texto.push('\n');
                texto.push('Typo:');
                texto.push(data.type);
                texto.push('\n');
                texto.push('Altura:');
                texto.push(data.size);
                texto.push('\n');
                texto.push('Ataque:');
                texto.push(data.attack);
                texto.push('\n');
                texto.push('Hp:');
                texto.push(data.hp);
                texto.push('\n');
                texto.push('Defensa:');
                texto.push(data.defe);
                return new Blob(texto, {
                    type: 'text/plain'
                });
                }
        
            //funcion para ejecutar la descargar al hacer click
                descargarArchivo(generarTexto(data, data.name))
        
    }
}