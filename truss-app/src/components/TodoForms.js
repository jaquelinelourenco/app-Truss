import React, {useState, useEffect, useRef} from "react"
import { ButtoRadio } from "./styled"

// Just some styles
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
    },
    preview: {
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
    },
    image: { maxWidth: "100%", maxHeight: 320 },
    delete: {
      cursor: "pointer",
      padding: 15,
      background: "red",
      color: "white",
      border: "none",
    },
  };

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : "")
    const inputRef = useRef(null)
    const [selectedValue, setSelectedValue] = useState({
        isAgree: false,
        priority: " ",

    })
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

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

    const handleInput = e => {
        setInput(e.target.value)
    }
    const handleChange = e => {
        const target = e.target
        const name = target.name
        const value = target.type=="input" ? target.checked : target.value
        setSelectedValue({
            ...selectedValue,
            [name] : value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
        text: `${input} - ${selectedValue.priority} - ${image}`,
            input: document.querySelector("selectedValue"),

        })

        setInput('')
        setSelectedValue('')
    }

    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <>
                    <div className="App">
                        <h2>Upload Image</h2>
                        <input
                            type="file"
                            name="file"
                            placeholder="Upload an image"
                            onChange={uploadImage}
                        />
                        {loading ? (
                            <h3>Loading...</h3>
                        ) : (
                            <img src={image} style={{ width: '300px' }} />
                        )}
                    </div><br/>
                    <input
                        placeholder="Insert task"
                        value={input}
                        onChange={handleInput}
                        name="text"
                        ref={inputRef}
                    />
                    <ButtoRadio>
                        <h2>What are your priority:</h2>
                        <div>
                            <label>
                                A - Alta Prioridade
                                <input
                                    type="radio"
                                    name="priority"
                                    value="A"
                                    onChange={handleChange}
                                    checked={selectedValue.priority == "A"}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                B - Média Prioridade
                                <input
                                    type="radio"
                                    name="priority"
                                    value="B"
                                    onChange={handleChange}
                                    checked={selectedValue.priority == "B"}
                                    />
                            </label>
                        </div>
                        <div>
                            <label>
                                C - Baixa Prioridade
                                <input
                                    type="radio"
                                    name="priority"
                                    value="C"
                                    onChange={handleChange}
                                    checked={selectedValue.priority == "C"}
                                    />
                            </label>
                        </div>
                    </ButtoRadio>
                    <br/>
                    <button onClick={handleSubmit}>
                        To Add
                    </button>
                    <h2  /* style={styles.result} */>List Task: {input} - {selectedValue.priority} </h2>
{/*                     <div>
                             <div style={styles.preview}>
                                <img
                                src={URL.createObjectURL(selectedImage)}
                                style={styles.image}
                                alt="Thumb"
                                />
                            </div>
                            )}
                        </div> */}

                         {/* <p>
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
                            </p> */}
                </>
            </form>
        </div>
    )
}

export default TodoForm