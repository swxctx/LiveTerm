// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[ctrl+l]/clear: clear terminal.\n
Input 'see' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const baidu = async (args: string[]): Promise<string> => {
  window.open(`https://baidu.com?q=${args.join(' ')}`);
  return `Wow, really? You are using baidu for ${args.join(' ')}?`;
};

export const chatgpt = async (args: string[]): Promise<string> => {
  window.open(`https://ai.ooz.ink`);

  return 'Opening ooz chat gpt...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

// export const whoami = async (args: string[]): Promise<string> => {
//   return `${config.ps1_username}`;
// };

export const ls = async (args: string[]): Promise<string> => {
  return `A bunch of fake directories`;
};

export const cat = async (args: string[]): Promise<string> => {
  return `This is usth ooz website`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░██████░░░░░░░░░██████░░░░░░░░████████░░░░░░░░░░█░░░░░░░░░░████░░░██░░░░░░██░░░░██░░░░
  ░░░░████████░░░░░░░████████░░░░░░░░░░░░██░░░░░░░░░░░█░░░░░░░░░░████░░░██░░░░░░██░░░██░░░░░
  ░░░░██░░░░██░░░░░░░██░░░░██░░░░░░░░░░░███░░░░░░░░░░░█░░░░░░░░░░█████░░██░░░░░░██░░███░░░░░
  ░░░░██░░░░██░░░░░░░██░░░░██░░░░░░░░░░███░░░░░░░░░░░░█░░░░░░░░░░██░███░██░░░░░░██░███░░░░░░
  ░░░██░░░░░██░░░░░░██░░░░░██░░░░░░░░░███░░░░░░░░░░░░░█░░░░░░░░░░██░░█████░░░░░░██████░░░░░░
  ░░░███░░░░██░░░░░░███░░░░██░░░░░░░░███░░░░░░░░░░░░░░█░░░░░░░░░░██░░░████░░░░░░███████░░░░░
  ░░░░██░░░░██░░░░░░░██░░░░██░░░░░░░███░░░░░░░░░░░░░░░█░░░░░░░░░░██░░░████░░░░░░███░░██░░░░░
  ░░░░███░░███░░░░░░░███░░███░░░░░░░██░░░░░░░░░░░░░░░░█░░░░░░░░░░██░░░░███░░░░░░██░░░███░░░░
  ░░░░░██████░░░░░░░░░██████░░░░░░░░████████░░░░░░░░░░█░░░░░░░░░░██░░░░░██░░░░░░██░░░░███░░░
  ░░░░░░███░░░░░░░░░░░░███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

Input 'help' to see the list of available commands.
Input 'see' to display summary.
Input 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> to the our Github repository.
`;
};
