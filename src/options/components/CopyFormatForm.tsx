import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";

type CopyFormatProps = {
  register: UseFormRegister<{ type: string }>;
  onChange: (event: React.ChangeEvent<HTMLFormElement>) => void;
};
const Component: FC<CopyFormatProps & { className?: string }> = ({
  className,
  register,
  onChange,
}) => {
  return (
    <form className={className} onChange={onChange}>
      <section className={`${className}__section`}>
        <h4 className={`${className}__heading`}>
          {chrome.i18n.getMessage("copyFormatForm_heading01")}
        </h4>
        <ul className={`${className}__list`}>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type1-1" {...register("type")} />
              <span>{chrome.i18n.getMessage("copyFormatForm_typeText")}</span>
            </label>
          </li>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type1-2" {...register("type")} />
              <span>
                {chrome.i18n.getMessage("copyFormatForm_typeRichText")}
              </span>
            </label>
          </li>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type1-3" {...register("type")} />
              <span>
                {chrome.i18n.getMessage("copyFormatForm_typeMarkdown")}
              </span>
            </label>
          </li>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type1-4" {...register("type")} />
              <span>{chrome.i18n.getMessage("copyFormatForm_typeHtml")}</span>
            </label>
          </li>
        </ul>
      </section>

      <section className={`${className}__section`}>
        <h4 className={`${className}__heading`}>
          {chrome.i18n.getMessage("copyFormatForm_heading02")}
        </h4>
        <ul className={`${className}__list`}>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type2-1" {...register("type")} />
              <span>{chrome.i18n.getMessage("copyFormatForm_typeText")}</span>
            </label>
          </li>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type2-2" {...register("type")} />
              <span>
                {chrome.i18n.getMessage("copyFormatForm_typeRichText")}
              </span>
            </label>
          </li>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type2-3" {...register("type")} />
              <span>
                {chrome.i18n.getMessage("copyFormatForm_typeMarkdown")}
              </span>
            </label>
          </li>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type2-4" {...register("type")} />
              <span>{chrome.i18n.getMessage("copyFormatForm_typeHtml")}</span>
            </label>
          </li>
        </ul>
      </section>

      <section className={`${className}__section`}>
        <h4 className={`${className}__heading`}>
          {chrome.i18n.getMessage("copyFormatForm_heading03")}
        </h4>
        <ul className={`${className}__list`}>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type3-1" {...register("type")} />
              <span>{chrome.i18n.getMessage("copyFormatForm_typeText")}</span>
            </label>
          </li>
        </ul>
      </section>

      <section className={`${className}__section`}>
        <h4 className={`${className}__heading`}>
          {chrome.i18n.getMessage("copyFormatForm_heading04")}
        </h4>
        <ul className={`${className}__list`}>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type4-1" {...register("type")} />
              <span>{chrome.i18n.getMessage("copyFormatForm_typeText")}</span>
            </label>
          </li>
        </ul>
      </section>

      <section className={`${className}__section`}>
        <h4 className={`${className}__heading`}>
          {chrome.i18n.getMessage("copyFormatForm_heading05")}
        </h4>
        <ul className={`${className}__list`}>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type5-1" {...register("type")} />
              <span>{chrome.i18n.getMessage("copyFormatForm_typeText")}</span>
            </label>
          </li>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type5-2" {...register("type")} />
              <span>
                {chrome.i18n.getMessage("copyFormatForm_typeMarkdown")}
              </span>
            </label>
          </li>
          <li className={`${className}__item`}>
            <label className={`${className}__label`}>
              <input type="radio" value="type5-3" {...register("type")} />
              <span>{chrome.i18n.getMessage("copyFormatForm_typeHtml")}</span>
            </label>
          </li>
        </ul>
      </section>
    </form>
  );
};

export const CopyFormatForm = styled(Component)`
  display: grid;
  row-gap: 10px;
  padding: 0 10px;

  &__heading {
    font-size: 0.875rem;
  }

  &__list {
    display: grid;
    row-gap: 10px;
    padding: 10px 20px;
  }

  &__item {
    list-style-position: inside;
  }

  &__label {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 15px;
    align-items: center;
    cursor: pointer;
  }
`;
