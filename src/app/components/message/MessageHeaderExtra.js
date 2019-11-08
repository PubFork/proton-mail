import React from 'react';
import PropTypes from 'prop-types';
import { Icon, LinkButton, Href } from 'react-components';
import { c } from 'ttag';
import { getListUnsubscribe } from './logic/message';

const MessageHeaderExtra = ({ message, onLoadImages }) => {
    const showRemote = message.hasImages && !message.showImages;
    const showUnsubscribe = /*!unsubscribed && */ getListUnsubscribe(message.data);

    return (
        <section className="mt0-5">
            {/* TODO: ExpirationTime */}
            {/* TODO: SpamScore */}
            {/* TODO: MIMEParsingFailed */}
            {/* TODO: hasError */}
            {/* TODO: unsubscribe */}
            {showUnsubscribe && (
                <div className="bg-white w100 rounded bordered-container p0-5 mb0-5 flex flex-nowrap flex-items-center">
                    <Icon name="email" className="flex-item-noshrink fill-global-grey mtauto mbauto" />
                    <span className="w100 flex flex-wrap">
                        <span className="pl0-5 pr0-5 mtauto mbauto flex-item-fluid-auto">
                            {c('Info').t`This message is from a mailing list`}
                        </span>
                        <span className="flex-item-noshrink flex">
                            <Href
                                className="nodecoration bold mr1 pl0-5 pr0-5"
                                href="https://protonmail.com/support/knowledge-base/auto-unsubscribe"
                            >
                                {c('Info').t`Learn more`}
                            </Href>
                            <LinkButton className="nodecoration bold">{c('Action').t`Unsubscribe`}</LinkButton>
                        </span>
                    </span>
                </div>
            )}
            {/* TODO: requireReadReceiptConfirmation */}
            {/* TODO: isAutoReply */}
            {/* TODO: attachedPublicKey */}
            {/* TODO: promptKeyPinning */}
            {/* TODO: askResign */}
            {showRemote && (
                <div className="bg-white w100 rounded bordered-container p0-5 mb0-5 flex flex-nowrap">
                    <Icon name="insert-image" className="flex-item-noshrink fill-global-grey mtauto mbauto" />
                    <span className="w100 flex flex-wrap">
                        <span className="pl0-5 pr0-5 mtauto mbauto flex-item-fluid-auto">
                            {c('Action').t`This message contains remote content`}
                        </span>
                        <span className="flex-item-noshrink flex">
                            <LinkButton onClick={onLoadImages} className="link pl0-5 pr0-5 bold">
                                {c('Action').t`Load`}
                            </LinkButton>
                        </span>
                    </span>
                </div>
            )}
        </section>
    );
};

MessageHeaderExtra.propTypes = {
    message: PropTypes.object.isRequired,
    onLoadImages: PropTypes.func.isRequired
};

export default MessageHeaderExtra;