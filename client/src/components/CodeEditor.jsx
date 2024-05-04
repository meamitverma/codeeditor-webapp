import { Box } from "@chakra-ui/react"
import { Editor } from '@monaco-editor/react'
import { useRef, useState } from "react"
import LanguageSelector from "./LanguageSelector"


const CodeEditor = () => {

    const editorRef = useRef()
    const [value, setValue] = useState("")
    const [language, setLanguage] = useState('javascript')

    const onMount = (editor) => {
        editorRef.current = editor
        editor.focus();
    }

    const onSelect = (language) => {
        setLanguage(language);
    }

  return (
    <Box>
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor 
            theme="vs-dark"
            height={"75vh"}
            language={language}
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