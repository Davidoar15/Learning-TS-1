import { Form } from 'react-bootstrap';
import { SectionType } from '../types.d';

interface Props {
    type: SectionType
    loading?: boolean
    onChange: (value: string) => void
    value: string
}

const commonStyles = { border: 0, height: "200px", resize: "none" }

const getPlaceHolder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
    if (type === SectionType.From) return "Introduce Text";
    if (loading === true) return "Loading..."
    return "Translation";
}

export const TextArea = ({ type, loading, value, onChange }: Props) => {

    const styles = type === SectionType.From
        ? commonStyles
        : { ...commonStyles, backgroundColor: "#f5f5f5" };
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
    }

    return (
        <Form.Control 
            as="textarea" 
            placeholder={getPlaceHolder({ type, loading })} 
            autoFocus={type === SectionType.From}
            value={value}
            onChange={handleChange}
            style={styles}>
        </Form.Control>
    )
}