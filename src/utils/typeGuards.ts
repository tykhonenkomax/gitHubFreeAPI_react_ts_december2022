import {GitHubUser} from "../tayps";

export const isGitHubUser = (user: any): user is GitHubUser => "id" in user;

