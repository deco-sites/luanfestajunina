interface Props {
  children: React.ReactNode;
  customStyles?: string;
}

export function Button({ children, customStyles }: Props) {
  return (
    <button class={`py-5 px-11 text-white rounded-full border-2 border-white ${customStyles}`}>
      {children}
    </button>
  )
}