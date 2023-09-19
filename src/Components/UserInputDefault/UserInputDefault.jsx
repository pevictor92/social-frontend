export default function UserInputDefault({ title, type, state, setState }) {
  return (
    <>
      <div className="input-field">
        <label htmlFor="user">{title}</label>
        <input
          id={title}
          type={type}
          placeholder={`Insert your ${title} `.toLowerCase()}
          value={state}
          onChange={setState}
        />
      </div>
    </>
  );
}
