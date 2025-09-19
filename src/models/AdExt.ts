import type { Ad } from './Ad';

export interface AdExt extends Ad {
  application_deadline?: string;



  employment_type?: {
    label?: string;
  };

  salary_type?: {
    label: string;
  };

  duration?: {
    label: string;
  };

  working_hours_type?: {
    label?: string;
  };

  application_details?: {
    url?: string;
  };

  experience_required?: boolean;

  driving_license_required?: boolean;

  occupation_group?: {
    label?: string;
  };

  occupation_field?: {
    label?: string;
  };

  must_have?: {
    work_experiences?: {
      label: string;
    }[];
  };

  nice_to_have?: {
    work_experiences?: {
      label: string;
    }[];
  };

  application_contacts?: {
    name?: string;
    description?: string;
    email?: string;
    telephone?: string;
  }[];
}
