/*
emoji
    const displayEmojiName = e => alert(e.target.id);
        const emojis = [
        {
            emoji: '✅',
            name: "Concluded"
        },
        {
            emoji: '📌',
            name: "Attached"
        }
    ]
    return (
        <p>
            {
                emojis.map(emoji => (
                    <p key={emoji.name}>
                        <button
                            onClick={displayEmojiName}
                        >
                            <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                        </button>
                    </p>
                ))
            }
        </p>
    )

    imagem
    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'darwin')
      setLoading(true)
      const res = await fetch(
        '	https://api.cloudinary.com/v1_1/dihifeicm/image/upload',
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json()
      setImage(file.secure_url)
      setLoading(false)
    }

*/