export interface iInput {
  placeholder: string;
  name: string;
  type?: string;
  value?: string;
}

export interface iFirst {
  action: (formData: FormData) => void;
}
