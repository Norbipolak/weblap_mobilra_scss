/*
hasznos mixinek
*/
// Clearfix mixin

@mixin clearfix {
    &::after {
        content: "";
        display: table;
        clear: both;
    }
}

// Text truncation mixin
@mixin text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

// Centering mixin
@mixin center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

// Breakpoints
$breakpoints: (
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
);

// Responsive mixin
@mixin respond-to($breakpoint) {
    @if map-has-key($breakpoints, $breakpoint) {
        @media screen and (min-width: map-get($breakpoints, $breakpoint)) {
            @content;
        }
    } @else {
        @warn "Unknown breakpoint: #{$breakpoint}.";
    }
}

//Fontos!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Animation keyframes mixin
@mixin keyframes($animation-name) {
    @keyframes #{$animation-name} {
        @content;
    }
}

// Animation mixin
@mixin animation($name, $duration, $timing-function, $delay, $iteration-count, $direction, $fill-mode) {
    animation: $name $duration $timing-function $delay $iteration-count $direction $fill-mode;
}

