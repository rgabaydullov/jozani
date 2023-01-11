import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import {
  BREAKPOINTS,
  Button,
  Col, Row, SafeView, Typography, useLottie,
} from '@jozani/uikit';
import { CardDigest, CardPromo, Digest, HeroPromo, SectionPromo } from '../widgets';
import { IBasePage } from './types';
import {
  AnimationSubheadVariants,
  ANIMATION_SUBHEAD_IMAGE_VARIANTS,
  ANIMATION_SUBHEAD_TRANSITION_DURATION,
} from './constants';
import animationData from './data.json';

import STYLES from './Index.module.scss';

const Index: IBasePage = () => {

  const [isPageReady, setIsPageReady] = useState(false);

  const isMobile = useMediaQuery(`screen and (max-width: ${BREAKPOINTS.sm}px)`);
  const isTablet = useMediaQuery(`screen and (min-width: ${BREAKPOINTS.md}px)`);

  const animateSubhead = isPageReady
    ? AnimationSubheadVariants.Visible
    : AnimationSubheadVariants.Hidden;

  const { View } = useLottie({
    animationData,
    rendererSettings: {
      className: STYLES.lottieSvg,
    },
  });

  useEffect(() => {
    const onReadyStateChange = () => setIsPageReady(true);

    document.addEventListener('readystatechange', onReadyStateChange);

    return () => {
      document.removeEventListener('readystatechange', onReadyStateChange);
    };
  }, []);

  return (
    <>
      <HeroPromo
        backgroundComponent={<View />}
        style={{
          height: isTablet ? '65vh' : '80vh',
          minHeight: isTablet ? 440 : 540,
        }}
      >
        <SafeView>
          <Row spacing={3}>
            <Col mobile={12} sm="auto">
              <Typography variant="h1" maxWidth={450}>
                The best challenge friend experience

                <div className="mt-6" />

                <Typography variant="body2">
                  We provide challenge with fair payouts.
                </Typography>
              </Typography>

              {/* <Typography variant="h4">
                <motion.div
                  initial={AnimationSubheadVariants.Hidden}
                  animate={animateSubhead}
                  variants={ANIMATION_SUBHEAD_VARIANTS}
                  transition={{
                    duration: ANIMATION_SUBHEAD_TRANSITION_DURATION,
                  }}
                >
                  For folks.
                </motion.div>
                <motion.div
                  initial={AnimationSubheadVariants.Hidden}
                  animate={animateSubhead}
                  variants={ANIMATION_SUBHEAD_VARIANTS}
                  transition={{
                    duration: ANIMATION_SUBHEAD_TRANSITION_DURATION,
                    delay: ANIMATION_SUBHEAD_TRANSITION_DURATION,
                  }}
                >
                  For bloggers.
                </motion.div>
                <motion.div
                  initial={AnimationSubheadVariants.Hidden}
                  animate={animateSubhead}
                  variants={ANIMATION_SUBHEAD_VARIANTS}
                  transition={{
                    duration: ANIMATION_SUBHEAD_TRANSITION_DURATION,
                    delay: ANIMATION_SUBHEAD_TRANSITION_DURATION * 2,
                  }}
                >
                  For everybody.
                </motion.div>
              </Typography> */}
            </Col>

            <Col mobile={12} sm="auto">
              <div
                style={{
                  marginLeft: 'auto',
                  width: '32vw',
                  minWidth: 280,
                  maxWidth: 500,
                }}
              >
                <motion.img
                  src="/assets/challenge-friends.png"
                  alt="Challenge"
                  initial={AnimationSubheadVariants.Hidden}
                  animate={animateSubhead}
                  variants={ANIMATION_SUBHEAD_IMAGE_VARIANTS}
                  transition={{
                    duration: ANIMATION_SUBHEAD_TRANSITION_DURATION,
                  }}
                />
              </div>
            </Col>
          </Row>
        </SafeView>
      </HeroPromo>

      <SafeView>
        <Typography variant="h3" textAlign="center">
          How it works?
        </Typography>

        <div className="my-6 mx-auto" style={{ maxWidth: 350 }}>
          <Typography
            variant="body1"
            textAlign="center"
            fontStyle="italic"
            style={{
              fontWeight: 'normal',
            }}
          >
            &ldquo;You might win some, you might lose some.
            But you go in, you challenge yourself,
            you become a better man,
            a better individual,
            a better fighter&rdquo;
          </Typography>
        </div>

        <div className="mt-12" />

        <Row
          justifyContent="center"
          spacing={{
            mobile: 2,
            md: 4,
          }}
        >
          <Col mobile={12} md={4} lg={4}>
            <CardPromo>
              <div style={{ height: 120, width: 120 }}>
                <img src="/assets/create-challenge.png" />
              </div>

              <div className="mt-6" />

              <Typography variant="h5">
                Instant Challenges
              </Typography>

              <div className="mt-4" />

              <Typography variant="body1" textAlign="center">
                Release the challenge in less than 10 seconds.
                <br />
                Ready to use immediately
              </Typography>
            </CardPromo>
          </Col>

          <Col mobile={12} md={4} lg={4}>
            <CardPromo>
              <div style={{ height: 120, width: 120 }}>
                <img src="/assets/pay-challenge.png" />
              </div>

              <div className="mt-6" />

              <Typography variant="h5">
                Secure Payments
              </Typography>

              <div className="mt-4" />

              <Typography variant="body1" textAlign="center">
                Most of us love to use USDT and we give you the opportunity to proceed by crypto
              </Typography>
            </CardPromo>
          </Col>

          <Col mobile={12} md={4} lg={4}>
            <CardPromo>
              <div style={{ height: 120, width: 120 }}>
                <img src="/assets/challenge.png" />
              </div>

              <div className="mt-6" />

              <Typography variant="h5">
                Trusted by Users
              </Typography>

              <div className="mt-4" />

              <Typography variant="body1" textAlign="center">
                Only you decide on every challenge. All funds will be protected until you release
              </Typography>
            </CardPromo>
          </Col>
        </Row>
      </SafeView>

      <SectionPromo>
        <SafeView>
          <Row spacing={4}>
            <Col mobile={12} md="auto">
              <Typography
                variant="h2"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                Get your first real payout by referring a friend!
              </Typography>
            </Col>
            <Col justifyContent="flex-end" textAlign="right">
              <Button
                fullWidth={isMobile}
                variant="contained"
                size="large"
              >
                Try it now
              </Button>
            </Col>
          </Row>

          <div className="mt-6" />

          <Typography variant="body1">
            Use our new amazing challenge platform
          </Typography>
        </SafeView>
      </SectionPromo>

      <SafeView>
        <div className={STYLES.blockHowItWorks}>
          <Typography variant="h3" textAlign="center">
            Simple to Use
          </Typography>

          <div className={STYLES.feature}>
            <div style={{ width: 80 }}>
              <img src="/assets/first.png" />
            </div>

            <div className="ml-12">
              <Typography variant="h6">
                Come up with a Goal
              </Typography>

              <Typography variant="body1">
                Do you prefer to come up with your own or choose from a digest?
                <br />
                Anyway your friend claim a payout.
              </Typography>
            </div>
          </div>

          <div className={STYLES.feature} style={{ marginLeft: 'auto' }}>
            <div className="mr-12">
              <Typography variant="h6">
                Set the Pledge
              </Typography>

              <Typography variant="body1">
                Reserve some funds for a Goal to share with somebody.
                <br />
                Anytime revertible.
              </Typography>
            </div>

            <div style={{ width: 80 }}>
              <img src="/assets/second.png" />
            </div>
          </div>

          <div className={STYLES.feature}>
            <div style={{ width: 160 }}>
              <img src="/assets/final.png" />
            </div>

            <div className="ml-12">
              <Typography variant="h6">
                Win-Win
              </Typography>

              <Typography variant="body1">
                No loses at all!
                <br />
                Get back your Pledge or Donate.
              </Typography>
            </div>
          </div>
        </div>
      </SafeView>

      <div className="mt-12" />

      <SafeView>
        <Typography variant="h3" textAlign="center">
          Daily Digest
        </Typography>

        <div
          className={cn(STYLES.block, STYLES.blockMaxContent)}
        >
          <div className={STYLES.blockDailyDigest}>
            <Row spacing={2}>
              <Col mobile="auto">
                <CardDigest
                  type={Digest.Rose}
                  // bgColors={CATEGORY_COLORS}
                  title="Do not smoke"
                >
                  Start no smoke challenge now
                </CardDigest>
              </Col>

              <Col mobile="auto">
                <CardDigest
                  type={Digest.Apricot}
                  // bgColors={CATEGORY_COLORS}
                  title="Lose weight now"
                >
                  Daily fitness to claim the goal
                </CardDigest>
              </Col>

              <Col mobile="auto">
                <CardDigest
                  type={Digest.Marine}
                  // bgColors={CATEGORY_COLORS}
                  title="Helicopter Jump"
                >
                  Catch some new feelings
                </CardDigest>
              </Col>

              <Col mobile="auto">
                <CardDigest
                  type={Digest.Nuclear}
                  // bgColors={CATEGORY_COLORS}
                  title="Pleasant Day"
                >
                  Gift you folks
                </CardDigest>
              </Col>
            </Row>
          </div>
        </div>
      </SafeView>

      <div className="mt-12" />

    </>
  );
};

Index.isCommonPage = true;

export default React.memo(Index);
