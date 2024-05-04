import { Box } from "@chakra-ui/react"
import { Editor } from '@monaco-editor/react'
import { useRef, useState } from "react"


const CodeEditor = () => {

    const editorRef = useRef()
    const [value, setValue] = useState("")

    const onMount = (editor) => {
        editorRef.current = editor
        editor.focus();
    }

  return (
    <Box>
        <Editor 
            theme="vs-dark"
            height={"75vh"}
            defaultLanguage="javascript"
            defaultValue={"// Write your code here"}
            onMount={
                onMount
            }
            value={value}
            onChange={
                (value) => setValue(value)
            }
        />
    </Box>
  )
}

export default CodeEditor