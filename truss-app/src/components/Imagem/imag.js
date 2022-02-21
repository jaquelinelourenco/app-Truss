import React from "react";
import {CircularProgressbar} from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

import { Container, FileInfo, Preview } from "../styled";

/* const styles = {
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
}; */


const FileList = ({ files, onDelete }) => {

  return (
    <Container>
      {files.map(uploadedFile => (
        <li key={uploadedFile.id}>
          <FileInfo>
            <Preview src={uploadedFile.preview} />
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>
                {uploadedFile.readableSize}{" "}
                {!!uploadedFile.url && (
                  <button onClick={() => onDelete(uploadedFile.id)}>
                    Excluir
                  </button>
                )}
              </span>
            </div>
          </FileInfo>

          <div>
            {!uploadedFile.uploaded &&
              !uploadedFile.error && (
                <CircularProgressbar
                  styles={{
                    root: { width: 24 },
                    path: { stroke: "#7159c1" }
                  }}
                  strokeWidth={10}
                  percentage={uploadedFile.progress}
                />
              )}

            {uploadedFile.url && (
              <a
                href={uploadedFile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
              </a>
            )}

            {uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
            {uploadedFile.error && <MdError size={24} color="#e57878" />}
          </div>
        </li>
      ))}
    </Container>
);
}


export default FileList;