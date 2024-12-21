import { useRef, useState } from "react";
import QuoteIntroHeading from "./QuoteIntroHeading";
import AttachmentSelectButton from "./AttachmentSelectButton";
import FileUploadIcon from "../assets/file-upload-icon.svg";

const AttachmentSection = () => {
  const ImageRef = useRef(),
    [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = event => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const clickHandler = () => {
    ImageRef.current.click();
  };

  return (
    <div>
      <QuoteIntroHeading
        heading="Terms and Attachments"
        paragraph="Provide detailed information on payment and delivery termsProvide detailed information on payment and delivery terms"
      />
      <section className="flex flex-wrap gap-[1.125rem] mb-6">
        <AttachmentSelectButton label="Payment Terms" option="Net 30" />
        <AttachmentSelectButton
          label="Delivery Schedule"
          option="Immediate delivery"
        />
        <AttachmentSelectButton
          label="Shipping Method"
          option="Courier Services"
        />
        <AttachmentSelectButton label="Lead time" option="10" />
      </section>
      <div className="flex">
        <section className="w-[calc(50%-0.5625rem)] border-t border-[#D0D5DD] pt-4">
          <section className="mb-6">
            <h1 className="text-[#1D2739] font-bold leading-[1.45rem] mb-2">
              Attachments
            </h1>
            <p className="text-sm leading-[1.45rem] text-[#98A2B3]">
              Attach all necessary files or documents
            </p>
          </section>
          <section>
            <input
              className="hidden"
              type="file"
              ref={ImageRef}
              onChange={handleImageChange}
            />
            <section className={`w-full ${imagePreview ? "h-80" : "h-auto"}`}>
              {imagePreview ? (
                <img
                  className="size-full cursor-pointer object-cover rounded-[12px]"
                  src={imagePreview}
                  alt="Icon"
                  onClick={clickHandler}
                />
              ) : (
                <img
                  className="size-full cursor-pointer"
                  src={FileUploadIcon}
                  alt="Icon"
                  onClick={clickHandler}
                />
              )}
            </section>
          </section>
        </section>
        <section className="w-[calc(50%-0.5625rem)]"></section>
      </div>
      <div className="mt-8 border-[#D0D5DD] border-t" />
    </div>
  );
};

export default AttachmentSection;
