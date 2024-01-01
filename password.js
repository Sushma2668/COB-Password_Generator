let btn = document.getElementById("btn")
   let copyIcon = document.getElementById("copyIcon")

    function generatePassword() {

      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const numericChars = '0123456789';
      const specialChars = '!@#$%^&*()_-+=<>?';

      let selectedChars = lowercaseChars;
      
      if (document.getElementById('upper').checked) {
        selectedChars += uppercaseChars;
      }
      if (document.getElementById('num').checked) {
        selectedChars += numericChars;
      }
      if (document.getElementById('char').checked) {
        selectedChars += specialChars;
      }

      let password = '';
      const passwordLength = 12; // You can change the length as per your requirement.

      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * selectedChars.length);
        password += selectedChars.charAt(randomIndex);
      }
      
      document.getElementById('box').value = password;
    }
    copyIcon.addEventListener('click', ()=>{
        navigator.clipboard.writeText(box.value)
        copyIcon.title="Password copied";   
      });
