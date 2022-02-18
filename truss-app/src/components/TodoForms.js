import Image from "../components/Imagem/imag"
import React, {useState, useEffect, useRef} from "react"
import { ButtoRadio } from "./styled"
import FileList from "./Imagem/imag"

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
    image: {
        maxWidth: "50%",
        maxHeight: 50,
        borderRadius: "2px"
    },
    result: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
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
    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {
        inputRef.current.focus()
    })
    // TO IMAGE CHANGE
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
      };

      // TO REMOVE IMAGE
      const removeSelectedImage = () => {
        setSelectedImage();
      };

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
    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
        text: `${input} - ${selectedValue.priority} `,
            input: document.querySelector("selectedValue"),
        })
        setInput('')
        setSelectedValue('')
    }

    return (
        <div>
            <form>
                <>
                    <input
                        placeholder="Insert task"
                        value={input}
                        onChange={handleInput}
                        name="text"
                        ref={inputRef}
                    />
                    {input.length > 0 && (
                        <div>
                            <label >Upload file:</label>
                            <input
                            accept="image/*"
                            type="file"
                            onChange={selectedImage}
                            />
                        </div>
                    )}
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
                                    checked/* ={selectedValue.priority == "A"} */
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
                                    /*checked/*={selectedValue.priority == "B"} */
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
                                    /*checked/* ={selectedValue.priority == "C"} */
                                    />
                            </label>
                        </div>
                    </ButtoRadio>
                    <br/>
                    <button onClick={handleSubmit}>
                        To Add
                    </button>
                    <h2  style={styles.result}>List Task: {input} - {selectedValue.priority} </h2>
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