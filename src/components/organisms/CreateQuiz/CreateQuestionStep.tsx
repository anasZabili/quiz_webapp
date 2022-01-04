interface CreateQuestionStepProps {
  onSubmit?: (e: any) => void;
  stepNumber?: number;
}

const CreateQuestionStep: React.FC<CreateQuestionStepProps> = ({
  onSubmit,
  stepNumber,
}) => {
  return (
    <>
      <h1>une step</h1>
      {stepNumber && <h1>i am on step {stepNumber}</h1>}
    </>
  );
};

export default CreateQuestionStep;
