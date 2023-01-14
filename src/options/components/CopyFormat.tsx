import { FC, Suspense, useCallback } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useGetChromeStorageLocal } from "../hooks/getChromeStorageLocalHooks";
import { CopyFormatForm } from "./CopyFormatForm";
import { CopyFormatPreview } from "./CopyFormatPreview";
import { Loading } from "./Loading";

const CopyFormatFormContainer: FC<{}> = () => {
  const data = useGetChromeStorageLocal("type");
  if (!data) {
    return null;
  }

  const form = useForm({
    defaultValues: {
      type: data.type,
    },
    mode: "onChange",
  });
  const { register } = form;

  const onChange = useCallback(
    async (event: React.ChangeEvent<HTMLFormElement>) => {
      await chrome.storage.local.set({ type: event.target.value });
    },
    []
  );

  return (
    <>
      <CopyFormatPreview type={form.watch("type")} />
      <CopyFormatForm register={register} onChange={onChange} />
    </>
  );
};

type CopyFormatProps = {};
const Component: FC<CopyFormatProps & { className?: string }> = ({
  className,
}) => {
  return (
    <div className={className}>
      <div className={`${className}__inner`}>
        <h3 className={`${className}__heading`}>
          {chrome.i18n.getMessage("copyFormat_heading")}
        </h3>
        <p className={`${className}__lead`}>
          {chrome.i18n.getMessage("copyFormat_lead")}
        </p>
        <Suspense fallback={<Loading />}>
          <CopyFormatFormContainer />
        </Suspense>
      </div>
    </div>
  );
};

export const CopyFormat = styled(Component)`
  font-size: 0.875rem;
  color: #202124;
  border-bottom: 1px solid rgba(218, 220, 224, 1);

  &__inner {
    padding: 20px;
  }

  &__heading {
    font-size: 0.875rem;
  }

  &__lead {
    padding-top: 10px;
  }
`;
