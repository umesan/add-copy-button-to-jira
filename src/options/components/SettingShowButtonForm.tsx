import Switch from "@mui/material/Switch";
import { FC, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import { useGetChromeStorageLocal } from "../hooks/getChromeStorageLocalHooks";

type FormType = {
  backlog: boolean;
  sprint: boolean;
  issues: boolean;
};
type SettingShowButtonFormProps = {};
const Component: FC<SettingShowButtonFormProps & { className?: string }> = ({
  className,
}) => {
  const data = useGetChromeStorageLocal("show");
  if (!data) {
    return null;
  }

  const form = useForm<FormType>({
    defaultValues: {
      ...data.show,
    },
    mode: "onChange",
  });
  const { control, getValues } = form;

  const onChange = useCallback(async () => {
    await chrome.storage.local.set({
      show: getValues(),
    });
  }, []);

  return (
    <form className={className} onChange={onChange}>
      <ul className={`${className}__list`}>
        <li className={`${className}__item`}>
          <label className={`${className}__label`}>
            <span>
              {chrome.i18n.getMessage("settingShowButtonForm_item01")}
            </span>
            <Controller
              name="issues"
              control={control}
              render={(props) => (
                <Switch
                  {...props.field}
                  onChange={props.field.onChange}
                  checked={props.field.value}
                />
              )}
            />
          </label>
        </li>
        <li className={`${className}__item`}>
          <label className={`${className}__label`}>
            <span>
              {chrome.i18n.getMessage("settingShowButtonForm_item02")}
            </span>
            <Controller
              name="sprint"
              control={control}
              render={(props) => (
                <Switch
                  {...props.field}
                  onChange={props.field.onChange}
                  checked={props.field.value}
                />
              )}
            />
          </label>
        </li>
        <li className={`${className}__item`}>
          <label className={`${className}__label`}>
            <span>
              {chrome.i18n.getMessage("settingShowButtonForm_item03")}
            </span>
            <Controller
              name="backlog"
              control={control}
              render={(props) => (
                <Switch
                  {...props.field}
                  onChange={props.field.onChange}
                  checked={props.field.value}
                />
              )}
            />
          </label>
        </li>
      </ul>
    </form>
  );
};

export const SettingShowButtonForm = styled(Component)`
  &__list {
    display: grid;
    border: 1px solid rgba(218, 220, 224, 1);
  }

  &__item {
    list-style-position: inside;

    & + & {
      border-top: 1px solid rgba(218, 220, 224, 1);
    }
  }

  &__label {
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 15px;
    align-items: center;
    width: 100%;
    padding: 5px 20px;
    font-size: 0.875rem;
    cursor: pointer;
  }
`;
