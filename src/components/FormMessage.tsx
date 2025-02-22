
interface Props {
    message: string
}

export const FormMessage: React.FC<Props> = ({ message }) => {
    if (!message) return null
    return <p className="special-form__message">{message}</p>
  };