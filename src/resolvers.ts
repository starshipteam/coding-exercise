import axios from 'axios';
import http from './http';

export interface INameUrl {
    name: string;
    url: string;
}
  
export interface IPokemon {
    id: number;
    name: string;
    height?: number;
}

interface IIdName {
    idName: string;
}

interface IIDs {
    ids: string;
}

const getPokemonByIdName = (idName: string): Promise<IPokemon> =>
  http(`/pokemon/${idName.trim()}`);

const resolvers = {
    Query: {
        getAllPokemon: async () => await http('pokemon'),
        getPokemonByIdName: async (_, args: IIdName ) => await http(`pokemon/${args.idName}`),
        getAllPokemonByIds: async (_, args: IIDs ) => {
            return args.ids.split(',').map(id => getPokemonByIdName(id))
        }
    }
}

export default resolvers;