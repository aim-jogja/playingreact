import { View, StyleSheet } from "react-native-web";

const student = [
    {
        key: 1,
        name: 'student-1',
        address: 'jogja'
    },
    {
        key:2,
        name: 'student-2',
        address: 'jogja'
    },
]

const Card = ({name, address}) => {
    return(
        <View>
            <div style={styles.header}>
                <h1>{ name}</h1>
                <p>{ address }</p>
            </div>
        </View>
    )
}

const Header = (props) => {
    return(
        <View>
            {
                student.map((e)=> <Card {...e} key={e.key}/>)
            }
        </View>
    )
}

// function Header(props){
    
// }

const styles = StyleSheet.create({
    header: {
      padding: '60px',
      textAlign: 'center',
      backgroundColor: '#1abc9c',
      color: 'white',
      fontSize: '30px'
    },
    content : {
        padding: '20px'
    }
});

export default Header