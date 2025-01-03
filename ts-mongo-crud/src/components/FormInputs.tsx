interface FormInputProps {
  label: string;
  name: string;
  type: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, type }) => {
  return (
    <div className="form-control">
      <label htmlFor="" className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder="Type Here"
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;
