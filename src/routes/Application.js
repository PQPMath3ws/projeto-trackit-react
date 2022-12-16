import ApplicationStyle from "../styles/ApplicationStyle";

const Application = () => {
    const userImage = window.atob(localStorage.getItem(window.btoa("image")));

    return (
        <ApplicationStyle.ApplicationDiv>
            <ApplicationStyle.HeaderApplicationDiv>
                <ApplicationStyle.HeaderTrackItText>TrackIt</ApplicationStyle.HeaderTrackItText>
                <ApplicationStyle.HeaderUserImage src={userImage}></ApplicationStyle.HeaderUserImage>
            </ApplicationStyle.HeaderApplicationDiv>
            <ApplicationStyle.ApplicationContent>
            </ApplicationStyle.ApplicationContent>
            <ApplicationStyle.FooterApplicationDiv>
                <ApplicationStyle.FooterLink to="/habitos">Hábitos</ApplicationStyle.FooterLink>
                <ApplicationStyle.FooterDayDiv>
                    <ApplicationStyle.FooterDayIncompleteCircle></ApplicationStyle.FooterDayIncompleteCircle>
                    <ApplicationStyle.FooterDayLink to="/hoje">Hoje</ApplicationStyle.FooterDayLink>
                </ApplicationStyle.FooterDayDiv>
                <ApplicationStyle.FooterLink to="/historico">Histórico</ApplicationStyle.FooterLink>
            </ApplicationStyle.FooterApplicationDiv>
        </ApplicationStyle.ApplicationDiv>
    );
};

export default Application;