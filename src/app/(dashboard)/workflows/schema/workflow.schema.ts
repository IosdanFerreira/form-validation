import { z } from "zod";

export const createWorkflowSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres" })
    .max(50, { message: "O nome deve ter no máximo 50 caracteres" }),
  description: z
    .string()
    .min(3, { message: "A descrição deve ter no mínimo 3 caracteres" })
    .max(80, { message: "A descrição deve ter no máximo 80 caracteres" })
    .optional(),
});
