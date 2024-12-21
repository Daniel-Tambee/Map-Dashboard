const AttachmentSelectButton = props => {
  return (
    <section className="w-[calc(50%-0.5625rem)]">
      <label
        className="block font-bold text-sm leading-[1.26875rem] text-[#475367} mb-1 text-[#475367]"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <select
        className="block w-full text-sm text-[#101928] h-10 rounded-md bg-white border-[#D0D5DD] border"
        name={props.label}
      >
        <option value={props.option}>{props.option}</option>
      </select>
    </section>
  );
};

export default AttachmentSelectButton;
