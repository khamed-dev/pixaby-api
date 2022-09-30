import { memo } from 'react';
import { useFetch } from '../hooks/useFetch';
import PixabayItem from '../components/PixabayItem';
import List from './List';
import { REQUEST_STATUS } from '../hooks/useFetch';

const ListWithUrl = ({
    options
}) => {
    const [requestStatus, resources] = useFetch(options);
    console.log(requestStatus)
    if (requestStatus===REQUEST_STATUS.LOADING) return <p>loading...</p>

    if (requestStatus===REQUEST_STATUS.FAILURE) return <p>error : something went wrong</p>

    return !!resources.length ? <div className="ui grid container">
        <List items={resources} resourceName="pixabay" itemComponent={PixabayItem} /> </div>
        : <div className="ui grid container"><p>no items to show for this search</p></div>

}

export default memo(ListWithUrl);