import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  userName: {
    display: 'flex',
    color: 'white',
    alignItems: 'center',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
}));