import { useState } from 'react';
import styles from './Search.module.scss';
import searchIcon from '../../assets/pesquisa.png';

interface SearchProps {
  onSearch: (user: any) => void;
}

function Search({ onSearch }: SearchProps) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        setError('Nenhum perfil foi encontrado com ese nome de usuário.Tente novamente');
        onSearch(null);
        return;
      }

      const data = await res.json();
      setError('');
      onSearch(data);
    } catch (err) {
      setError('Erro ao buscar usuário.');
      onSearch(null);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Digite um usuário do Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
        <img src={searchIcon} alt="Pesquisar" />
        </button>
      </div>

      {error && (
        <div className={styles.errorBox}>
          {error}
        </div>
      )}
    </div>
  );
}

export default Search;

