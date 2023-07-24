import { ChangeEvent } from 'react';
import styles from './SearchInput.module.scss';
import CrossIcon from "@/shared/assets/CrossIcon";
import SearchIcon from "@/shared/assets/SearchIcon";

interface Props  {
    searchValue: string;
    setSearchValue: (value: string) => void;
};

const SearchInput = ({ searchValue, setSearchValue }: Props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
    };
    const removeValue = () => {
        setSearchValue('');
    };

    return (
        <div className={styles.main}>
            <div className={styles.searchBlock}>
                <SearchIcon />
                <input type="text" placeholder="Search..." value={searchValue} onChange={onChangeHandler} />
            </div>
            <div className={styles.crossButton} onClick={removeValue}>
                {searchValue && <CrossIcon />}
            </div>
        </div>
    );
};

export default SearchInput;
