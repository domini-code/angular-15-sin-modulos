

interface Choice {
  index: number;
  message: Message;
  finish_reason: string;
}
interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface Message {
  role: string;
  content: string;
}

export interface ChatCompletion {
  id: string;
  object: string;
  created: number;
  choices: Choice[];
  usage: Usage;
}
