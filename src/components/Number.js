import { connect } from "react-redux";

const Number = ({number}) => {
    
    return (
        <div>
            <input type="text" value={number}/>

        </div>

    );
}

const mapStateToProps = ({ number }) => {
    return {number};
}

export default connect(mapStateToProps)(Number);