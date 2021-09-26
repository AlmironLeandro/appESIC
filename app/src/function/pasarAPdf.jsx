
const pasarAPdf = (documento) => {
    var link = document.createElement('a');
    link.download = 'File';
    link.href = documento;
    document.body.appendChild(link);
    link.click();
  
};

export default pasarAPdf