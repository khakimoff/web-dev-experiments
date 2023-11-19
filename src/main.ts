const button = document.querySelector("button") as HTMLButtonElement;

button?.addEventListener('click', () => {
  try {
    Notification.requestPermission().then((perm: string) => {
      if(perm === "granted") {
        new Notification("First notify", {
          body: "Hello Notification"
        })
      } else {
        console.log('Permission denied')
      }
    })
  } 
  catch(error) {
    console.log('Error requesting notification permission:', error)
  }

})