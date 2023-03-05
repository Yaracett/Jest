function limpiar_adn(cadena) {
   
    const valores_canonicos = new Set(['A', 'C', 'G', 'T']);
    

    if (cadena.length === 0) {
      return '';
    }
    
    cadena = cadena.toUpperCase();
    

    let adn_limpio = '';
    
  
    for (let i = 0; i < cadena.length; i++) {
      const base = cadena[i];
      if (valores_canonicos.has(base)) {
        adn_limpio += base;
      }
    }
    
    return adn_limpio;
  }
  