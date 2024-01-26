import classes from './style.module.scss'
import ImageIcon from '@static/images/ImageIcon.svg'
import { useState } from 'react'
import { FormattedMessage } from 'react-intl';

const CreatePost = () => {
    const [contentData, setContentData] = useState()
    const [textNotError, setTextNotError] = useState(true)
    const [imageUploadNotError, setImageUploadNotError] = useState(true)
    const [contentNotEmptyError, setcontentNotEmptyError] = useState(true)
    const [textNotEmpty, setTextNotEmpty] = useState(false)
    const [imageNotEmpty, setImageNotEmpty] = useState(false)
    const onChangeHandler = (value, type) => {
        console.log(contentData)
        setContentData({
            ...contentData,
            [type]: value
        })
        if (contentData?.contentText?.length >= 254) {
            setTextNotError(false)
        } else {
            setTextNotError(true)
        }
        if (contentData?.contentText?.length > 1) {
            setTextNotEmpty(true)
        }
        if (contentData?.contentText?.length < 2) {
            setTextNotEmpty(false)
        }
    }
    const onChangeFile = (value, type) => {
        console.log(contentData)
        if (value?.type.split("/")[0] != "image") {
            setImageUploadNotError(false)
            setImageNotEmpty(false)
        } else {
            setImageUploadNotError(true)
            setContentData({
                ...contentData,
                [type]: value
            })
            setImageNotEmpty(true)
        }
    }
    const handleSubmit = () => {
        console.log(textNotEmpty, "&", imageNotEmpty, contentData?.contentText?.length)
        if (textNotEmpty == false || imageNotEmpty == false) {
            setcontentNotEmptyError(false)
        } else {
            setcontentNotEmptyError(true)
        }
    }
    return (
        <>
            <div className={classes["page-wrapper"]}>
                <div className={classes["content-container"]}>
                    <h3>
                        <FormattedMessage id="create_post_title" />
                    </h3>
                    <textarea onChange={(e) => onChangeHandler(e.target.value, 'contentText')} rows="10" cols="100" type="text" maxLength="255" placeholder='Write your post...' />
                    <div className={textNotError ? classes["display-hidden"] : classes["error-box"]}><FormattedMessage id="max_characters_error" /></div>
                    {imageNotEmpty ? (
                        <>
                            <div className={classes['image-preview-wrapper']}>
                                <img src={URL.createObjectURL(contentData.contentImg)} alt="" />
                            </div>
                        </>
                    ) : (
                        <>
                        </>
                    )}

                    <div className={imageUploadNotError ? classes["display-hidden"] : classes["error-box"]}><FormattedMessage id="image_upload_error" /></div>
                    <div className={contentNotEmptyError ? classes["display-hidden"] : classes["error-box"]}><FormattedMessage id="empty_post_input_error" /></div>
                    <div className={classes["submission-row"]}>
                        <div className={classes["submission-buttons"]}>
                            <label htmlFor="photo-file" className={classes["upload-image-btn"]}>
                                <img src={ImageIcon} alt="" width={40} height={40} />
                            </label>
                            <input onChange={(e) => onChangeFile(e.target.files[0], "contentImg")} hidden id="photo-file" type="file" accept="image/*" />
                            <button onClick={handleSubmit} className={classes["submit-post"]}>
                                <FormattedMessage id="create_post_title" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost